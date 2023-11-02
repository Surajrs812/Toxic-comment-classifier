# Toxic Comment Classifier

## Project Overview

This project focuses on building a machine learning model to identify toxic comments in text. It provides a user-friendly web-based interface that allows users to input text comments, and the model will classify them as either toxic or non-toxic.

## Project Components

This project comprises the following components:

1. **Model Training:** The machine learning model for comment toxicity detection is trained using labeled data containing both toxic and non-toxic comments.

2. **Web Application:** A Flask-based web application (found in `app.py`) serves as the user interface for entering comments and obtaining real-time predictions from the trained model.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- Python 3.7 or higher
- Flask (Python web framework)
- Scikit-learn (machine learning library)
- NLTK (Natural Language Toolkit)
- NumPy (numerical computing library)

You can install the required Python packages using pip:

```bash
pip install Flask scikit-learn nltk numpy
```

## Installation and Usage

Follow these steps to install and use the web application:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Surajrs812/Toxic-comment-classifier.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Toxic-comment-classifier
   ```

3. Run the Flask application:

   ```bash
   python app.py
   ```

4. Open a web browser and go to [http://127.0.0.1:5000](http://127.0.0.1:5000) to access the web application.

## How to Use

1. Visit the application URL ([http://127.0.0.1:5000](http://127.0.0.1:5000)).

2. You'll see a simple web page with an input field for comments.

3. Enter a text comment and click the "Check Toxicity" button.

4. The web application will display the classification result as either toxic or non-toxic.

## Directory Structure

The project directory is organized as follows:

- `app.py`: The Flask web application.
- `templates`: HTML templates for the web application.
- `Model Training`: Directory to store the trained comment toxicity model.

## Credits

This project was created by Suraj R S.

---

