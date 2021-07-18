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

    user_inputs = int(str(request.form[""]))

    result = Calculator.calculate(user_inputs)

    return jsonify(result=result)


if __name__ == '__main__':
    app.run()
