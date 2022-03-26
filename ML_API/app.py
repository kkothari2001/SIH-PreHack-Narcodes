from crypt import methods
from distutils.log import debug
from operator import methodcaller
from flask import Flask, render_template, request
from rake_nltk import Rake
# Flask constructor takes the name of 
# current module (__name__) as argument.
app = Flask(__name__)
  

@app.route('/', methods=['POST'])
def rake_extractor():
    """
    Uses Rake to extract the top 5 keywords from a text
    Arguments: text (str)
    Returns: list of keywords (list)
    """
    print(request.method)
    text = request.form['text']
    r = Rake()
    r.extract_keywords_from_text(text)
    return_dict= {}
    return_dict['keywords'] = r.get_ranked_phrases()[:5]
    kl = []
    keywords = {}
    for word in return_dict['keywords']:
        for keyword in word.split(' '):
            kl.append(keyword)
    keywords['keywords'] = kl
    return keywords   


# main driver function
if __name__ == '__main__':
    app.run(debug=True)