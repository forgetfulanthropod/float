import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("C:\\Users\\charlie\\Documents\\float\\float-439401-d8415b51a14c.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

doc_ref = db.collection('memories').document('MoFEwMcjBVQYZlMVvXfz')
# doc_ref.set({
#     'first': 'John',
#     'last': 'Doe',
#     'born': 1980
# })

# Retrieve data
doc = doc_ref.get()

print(db.collection('memories').document('MoFEwMcjBVQYZlMVvXfz').get('trails', []))
# print(f'doc.trails[0]: {doc.get('trails')}')

if doc.exists:
    print(f'Document data: {doc.to_dict()}')
else:
    print('No such document!')
