from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=["POST"])
def json_lucky_num():
    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]

    # Validates incoming information by building a failure object
    failed_lucky_num = validate_lucky_num_input(name, email, year, color)

    if failed_lucky_num:
        return (jsonify(failed_lucky_num), 201)

    lucky_num = {"num": {}, "year": {} }

    


# Validates incoming info, builds an error_message object and loads it with failures as it tests each input. If no failures, returns False
def validate_lucky_num_input(name, email, year, color):
    error_message = {"errors": {}}
    valid_colors = ["red", "green", "orange", "blue"]
    errors = False
    if not name:
        error_message["errors"]["name"] = ["Name is required"]
        errors = True
    if not email:
        error_message["errors"]["email"] = ["Email is required"]
        errors = True
    if int(year) > 2000 or int(year) < 1900:
        error_message["errors"]["year"] = ["Year is required and must be between 1900 and 2000"]
        errors = True
    if color not in valid_colors:
        error_message["errors"]["color"] = ["Color is required and must be: 'red', 'green', 'orange', or 'blue'"]
        errors = True
    if errors:
        return error_message
    return False
    
    