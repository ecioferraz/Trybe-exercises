from abc import ABC


ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log(ABC):
    def dispara_log(message):
        return message


class LogError(Log):
    def dispara_log(message):
        return f"{VERMELHO}{message}{RESET}"


class LogWarning(Log):
    def dispara_log(message):
        return f"{LARANJA}{message}{RESET}"


class LogSuccess(Log):
    def dispara_log(message):
        return f"{VERDE}{message}{RESET}"


print(LogError.dispara_log("O sistema esta com erros"))
print(LogWarning.dispara_log("O sistema está lento"))
print(LogSuccess.dispara_log("O sistema está funcionando"))


# course ->
class Log():
    def dispara_log(self, message):
        return message


class LogError():
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{message}{RESET}"


class LogWarning():
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{message}{RESET}"


class LogSuccess():
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{message}{RESET}"


print(LogError(Log()).dispara_log("O sistema está com erros"))
print(LogWarning(Log()).dispara_log("O sistema está lento"))
print(LogSuccess(Log()).dispara_log("O sistema está funcionando"))
