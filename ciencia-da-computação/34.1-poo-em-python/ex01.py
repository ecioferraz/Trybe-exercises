class TV:
    def __init__(self, volume, canal, tamanho, ligada):
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.volume <= 99:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume >= 0:
            self.volume -= 1

    def modificar_canal(self, novo_canal):
        if novo_canal < 1 or novo_canal > 99:
            raise ValueError("Canal indisponível")

    def ligar_desligar(self):
        self.ligada = not self.ligada
