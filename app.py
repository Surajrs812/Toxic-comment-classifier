from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load the pre-trained model and TF-IDF vectorizer
with open('toxicity_model.pkt', 'rb') as model_file:
    model = pickle.load(model_file)

with open('tf_idf.pkt', 'rb') as tfidf_file:
    tfidf = pickle.load(tfidf_file)

@app.route('/')
def index():
    return render_template('index.html', toxicity_result='')

@app.route('/predict', methods=['POST'])
def predict():
    text = request.form['text']
    text_tfidf = tfidf.transform([text])
    prediction = model.predict(text_tfidf)

    toxicity_result = "Toxic" if prediction == 1 else "Non-Toxic"
    return render_template('index.html', toxicity_result=toxicity_result)

if __name__ == '__main__':
    app.run(debug=True)
