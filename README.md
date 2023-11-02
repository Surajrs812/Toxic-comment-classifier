# Toxic-comment-classifier

# Toxic Comment Classifier

This Python code builds a binary classification model to predict the toxicity of text comments. It uses NLP techniques to preprocess the data and a Multinomial Naive Bayes classifier for classification.

## Methods Used

1. **Data Handling:**
   - Data is loaded from a CSV file into a Pandas DataFrame.
   - Unnecessary columns are removed.

2. **Text Pre-processing:**
   - Text data is cleaned, tokenized, and lemmatized.
   - TF-IDF vectors are created.

3. **Model Creation:**
   - A Multinomial Naive Bayes classifier is trained on the TF-IDF vectors.
   
4. **Model Evaluation:**
   - ROC curve and AUC score are used for model evaluation.
   
5. **Prediction:**
   - The model predicts toxicity of text.

6. **Model Saving:**
   - The trained model and TF-IDF vectorizer are saved.
