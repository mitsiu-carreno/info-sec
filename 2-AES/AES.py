import os
import base64

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

# 32 bytes = AES-256
key = AESGCM.generate_key(bit_length=256)

def encrypt(text):
    aes = AESGCM(key)

    # 12-byte nonce is standard for GCM
    nonce = os.urandom(12)

    ciphertext = aes.encrypt(
        nonce,
        text.encode("utf-8"),
        None
    )

    return {
        "nonce": base64.b64encode(nonce).decode(),
        "ciphertext": base64.b64encode(ciphertext).decode()
    }


def decrypt(data):
    aes = AESGCM(key)

    nonce = base64.b64decode(data["nonce"])
    ciphertext = base64.b64decode(data["ciphertext"])

    plaintext = aes.decrypt(
        nonce,
        ciphertext,
        None
    )

    return plaintext.decode("utf-8")


encrypted = encrypt("Hello secret world")

print(encrypted)

#encrypted["nonce"] = "a" + encrypted["nonce"][1:]
print(decrypt(encrypted))
