class Calculator:

    @classmethod
    def create(cls):
        return Calculator()

    def __init__(self):
        pass

    def calculate(self, calculation):
        if calculation:
            return eval(calculation)

        else:
            return None





