# for ignoring warnings in cmd
import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

# flask
from flask import Flask,  render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == "__main__":
 	app.config['TEMPLATES_AUTO_RELOAD'] = True
 	app.run(debug = False, threaded = False)
