import time
from locust import HttpUser, task, between


class QuickstartUser(HttpUser):
    def __init__(self, parent):
        super(QuickstartUser, self).__init__(parent)
        self.token = ""

    wait_time = between(5, )

    def on_start(self):
        with self.client.get("/AllStudents") as response:
            print(response.json()["....."])
