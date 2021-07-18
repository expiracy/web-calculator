import os.path

from flask import Flask, request, render_template, url_for, redirect, jsonify
from os.path import join, dirname, realpath
from calculator import Calculator

app = Flask(__name__, template_folder="resources", static_folder="resources/static/")

@app.route("/ui", methods=["GET"])
def ui():
    return render_template("calculator.html")

@app.route("/api", methods=["POST"])
def api():

    calculation = request.data
    calculation = calculation.decode("utf-8")

    result = Calculator.create().calculate(calculation)

    return jsonify(result=result)


if __name__ == '__main__':
    app.run()
