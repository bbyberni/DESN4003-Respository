
#import compas
import os

client = None

if True: #not compas.is_rhino():
    try:
        from openai import OpenAI
    except ImportError:
        pass


def init_chatgpt(secret_token):
    os.environ['OPENAI_API_KEY'] = secret_token
    #import hkua_dex
    #setattr(hkua_dex, 'CHATGPT', {})

    global client
    #hkua_dex.CHATGPT['client'] = client = OpenAI()
    client = OpenAI()


def embed_text(text, model="text-embedding-ada-002"):
    emb = client.embeddings.create(input=[text], model=model).data[0].embedding
    return emb


def ask_question(question, model="text-embedding-ada-002"):
    _response = client.chat.completions.create(model="gpt-3.5-turbo", messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": question},
        ]
    )
    response = _response.choices[0].message.content
    return response


if __name__ == "__main__":
    if False:
        init_chatgpt('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')
        print (ask_question('Why are there so many problems in this world?'))

    if False:
        from compas_cloud import Proxy
        p = Proxy()
        init_chatgpt = p.function('hkua_dex._chatgpt.init_chatgpt')
        init_chatgpt('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')
        ask_question = p.function('ask_function')
        res = ask_question("Why isn't Flanders a country?")
        ask_question('Why are there so many problems in this world?')

    # print (embed_text('I love apples.'))