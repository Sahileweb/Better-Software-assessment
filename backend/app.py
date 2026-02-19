from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime


app = Flask(__name__)
CORS(app) 

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class FeatureRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    upvotes = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "upvotes": self.upvotes,
            "created_at": self.created_at.isoformat()
        }

@app.route('/api/features', methods=['GET'])
def get_features():
    features = FeatureRequest.query.order_by(FeatureRequest.upvotes.desc()).all()
    return jsonify([f.to_dict() for f in features])

@app.route('/api/features', methods=['POST'])
def add_feature():
    data = request.json
    new_feature = FeatureRequest(
        title=data['title'],
        description=data['description']
    )
    db.session.add(new_feature)
    db.session.commit()
    return jsonify(new_feature.to_dict()), 201

@app.route('/api/features/<int:id>/upvote', methods=['POST'])
def upvote_feature(id):
    feature = FeatureRequest.query.get_or_404(id)
    feature.upvotes += 1
    db.session.commit()
    return jsonify(feature.to_dict())

# 5. Run the App
if __name__ == '__main__':
    with app.app_context():
        db.create_all() 
    app.run(debug=True, port=5000)