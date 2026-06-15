from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

digits = load_digits()

X = digits.data
y = digits.target

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = LogisticRegression(max_iter=2000)
model.fit(X_train, y_train)

prediction = model.predict([X_test[0]])

print("Predicted Digit:", prediction[0])
print("Actual Digit:", y_test[0])