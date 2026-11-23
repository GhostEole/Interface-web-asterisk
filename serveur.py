from flask import Flask, request

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def recuperer_variables():
  donnees = request.get_json(silent=True) or {}

  displayName = donnees.get("displayName")
  phoneNumber = donnees.get("phoneNumber")
  username = donnees.get("username")
  password = donnees.get("password")
  maxContact = donnees.get("maxContact")

  return "", 200
