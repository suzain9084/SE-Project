import subprocess
from config.config import python_dir

def run_grievance_service():
    subprocess.Popen([python_dir, "grievance_app\\app.py"])


if __name__ == '__main__':
    run_grievance_service()

    try:
        while True:
            pass
    except KeyboardInterrupt:
        print("\nTerminating both the processes. Alvida!")