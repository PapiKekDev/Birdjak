docker build -f Dockerfile -t birdjak .
docker run birdjak:latest&
disown -h -a