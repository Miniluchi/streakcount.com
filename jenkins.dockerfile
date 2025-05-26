FROM jenkins/jenkins:lts-jdk21

# Installation automatique des plugins nécessaires
RUN jenkins-plugin-cli --plugins ssh-agent:1.24.1

USER root
RUN apt-get update && \
    apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common && \
    apt-get install -y docker.io && \
    groupadd -g 1 docker || true && \
    usermod -aG docker jenkins

# USER jenkins  # Commenté pour garder l'accès Docker sur Mac
