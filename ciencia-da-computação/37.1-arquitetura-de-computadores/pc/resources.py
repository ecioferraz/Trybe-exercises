import os
from subprocess import check_output
import threading
from time import sleep

cpu_info = check_output("lscpu").decode("UTF-8").split("\n")

wanted = {
    "Modelo": "Nome do modelo",
    "Quantidade de cores": "CPU(s)",
    "Velocidade (MHz)": "CPU MHz",
    "Cache L1": "cache de L1i",
    "Cache L2": "cache de L2",
    "Cache L3": "cache de L3",
}

for title, index in wanted.items():
    for info in cpu_info:
        if info.startswith(index):
            info = info.split("  ")
            print(f"{title}: {info[-1]}")


memory_info = [
    info
    for info in check_output("free").decode("UTF-8").split("\n")[1].split(" ")
    if info
]


# ref https://stackoverflow.com/questions/3393612/
# run-certain-code-every-n-seconds
def print_every_second():
    threading.Timer(1.0, print_every_second).start()
    print(
        f"Memória total: {int(memory_info[1]) / 1000} Mb\n"
        f"Memória usada: {int(memory_info[2]) / 1000} Mb"
    )


print_every_second()


print(os.getpid())
sleep(5)
