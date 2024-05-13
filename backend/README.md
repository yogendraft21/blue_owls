# python-fastAPI-mysql

Backend for Patient Appointment system

## Usage

Clone the project and follow the steps below:

```bash
# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install the required packages inside venv
pip3 install -r requirements.txt

# If you need to upgrade pip for package compatibility, please run the command below
# and install the required packages again
pip3 install --upgrade pip

# Export environment variables (replace placeholders with actual values)
export DB_URL="mysql+pymysql://username:password@localhost/database_name"
export STRIPE_SECRET="your_stripe_secret_key"
export STRIPE_WEBHOOK="your_stripe_webhook_secret"

# We are using Stripe Transaction in INR so use this card number
4000 0035 6000 0008

# Open one more terminal listen for stripe webhook and paste this
stripe listen --forward-to 127.0.0.1:8000/webhook

# Ensure that your MySQL database is created
# If not, create the database using your preferred MySQL client

# Run the project with uvicorn autoreload to watch for file changes
uvicorn main:app --reload

# Deactivate the virtual environment when done
deactivate
