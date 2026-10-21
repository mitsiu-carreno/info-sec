from flask import Flask, request, send_file, Response
from datetime import datetime

app = Flask(__name__)


@app.before_request
def log_request():
    print("\n" + "=" * 60, flush=True)
    print(f"TIME: {datetime.now()}")
    print(f"METHOD: {request.method}")
    print(f"PATH: {request.full_path}")
    print(f"IP: {request.remote_addr}")

    print("\nHEADERS:")
    for key, value in request.headers:
        print(f"{key}: {value}")

    print("\nBODY:")
    print(request.get_data(as_text=True))

    print("=" * 60 + "\n", flush=True)


# Serve an image
@app.route("/resource/chonker.png")
def serve_image():
    return send_file("chonker.png", mimetype="image/png")


# Serve JavaScript
@app.route("/resource/script.js")
def serve_javascript():
    js_code = 'console.log("HI FROM THE OTHER SERVER");'
    return Response(js_code, mimetype="application/javascript")


# Catch everything else
@app.route("/", defaults={"path": ""}, methods=[
    "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"
])
@app.route("/<path:path>", methods=[
    "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"
])
def catch_all(path):
    return "OK", 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3001)
