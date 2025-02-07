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

- As configurações de **porta** e **stream** podem ser feitos no arquivo `config.json`. Exemplo:

```json
{
  "http_port": ":8083",
  "streams": {
    "cameras": {
      "channels": {
        "0": {
          "url": "rtsp://admin:admin@192.168.10.211:554",
          "debug": false,
          "audio": false
        }
      },
      "name": "Câmera Entrada Proansi"
    }
  }
}
```

## RTSP Front-end

- Este exemplo está construído em React, mas pode ser qualquer framework/interface web.
- Para acessar o arquivo m3u8 apropriado no Front o weclibre precisará formular a URL correta. O formato é:

```txt
http://localhost:8083/stream/{stream_name}/channel/{channel_name}/hls/live/index.m3u8
```

## Como executar o site

- Instale as dependências: `npm install`
- Inicialize o site: `npm run dev`

# Referências

- https://github.com/deepch/RTSPtoWeb
- https://medium.com/cisco-fpie/how-to-render-rtsp-streams-within-a-react-app-e7957e591075
