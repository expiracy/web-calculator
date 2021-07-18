class Calculator:

    @classmethod
    def create(cls):
        return Calculator()

    def __init__(self):
        self.result = None

    def calculate(self, inputs):
        print(inputs)
        print(inputs.data)
        return str(inputs.data) + "epic"
