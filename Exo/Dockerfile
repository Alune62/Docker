# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html
# COPY index.html .
# EXPOSE 80

FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app
CMD ["python", "main.py"]