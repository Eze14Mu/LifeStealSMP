import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
# Replace 'your_dataset.csv' with the path to your dataset file
df = pd.read_csv('your_dataset.csv')

# Display the first few rows of the dataset
print("First 5 rows of the dataset:")
print(df.head())

# Display basic statistics of the dataset
print("\nBasic statistics of the dataset:")
print(df.describe())

# Check for missing values
print("\nMissing values in the dataset:")
print(df.isnull().sum())

# Handle missing values by filling them with the mean of the column
df.fillna(df.mean(), inplace=True)

# Display the updated dataset with missing values handled
print("\nDataset after handling missing values:")
print(df.head())

# Generate a simple visualization: Histogram of a specific column
# Replace 'column_name' with the name of the column you want to visualize
plt.figure(figsize=(10, 6))
sns.histplot(df['column_name'], kde=True)
plt.title('Histogram of Column Name')
plt.xlabel('Column Name')
plt.ylabel('Frequency')
plt.show()

# Generate a simple visualization: Correlation heatmap
plt.figure(figsize=(12, 8))
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.title('Correlation Heatmap')
plt.show()
