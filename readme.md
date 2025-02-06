# Câmera WebRTSP

- Projeto de exemplo sobre como exibir câmeras RTSP diretamente no navegador.

# Configuração do ambiente

- O server tem como base o repositório [RTSPtoWeb](https://github.com/deepch/RTSPtoWeb/)
- Baixe e instale o [Go Lang](https://go.dev/doc/install) em sua máquina.
- Após a instalação, execute o comando `go version`
- Se exibir a versão, o Go foi instalado corretamente.

## RTSP Server

- Entre na pasta do servidor: `cd rtsp-server`
- Execute: `GO111MODULE=on go run *.go`
- Se o comando acima não funcionar, tente as opções abaixo de acordo com o terminal:

```bash
# powershell
$env:GO111MODULE="on"
go run .

# cmd
set GO111MODULE=on
go run .
```

- Por padrão, o servidor será executado em: http://127.0.0.1:8083
- Na interface web que abrir, é possível cadastrar as câmeras RTSP em **"Add Stream"**.

<img src="/rtsp-frontend/src/assets/rtsptoweb.jpg" alt="RTSPtoWEB">

- As configurações de porta e stream podem ser feitos no arquivo `config.json`
- Exemplo de configuração câmera RTSP no arquivo `config.json`

```json
  "streams": {
    "camera-recepcao": {
      "channels": {
        "0": {
          "url": "rtsp://admin:admin@192.168.10.211:554"
        }
      },
      "name": "Teste Câmera"
    }
  }
```

## RTSP Front-end

- Este exemplo está construído em React, mas pode ser qualquer framework/interface web.
