'''
Group Project: Application of Wordle Game
'''


from flask import Flask, render_template, redirect, url_for,request

# route for handling the login page logic (user: admin, pw=admin)
app = Flask(__name__)

# @app.route("/")
@app.route('/login', methods=['GET','POST']) # creating a login routes called login.

def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or request.form['password'] != 'admin':
            error = 'Invalid Credentials. Please try again.'
        else:
            return redirect(url_for('welcome'))
    return render_template('login.html',error=error)

@app.route("/welcome")
def welcome():
    error = None
    return render_template('welcome.html',error=error)


