
echo "BUILD LOCAL IMAGE"

cd ../

docker build --target release -t susa/zobozdravstvo-ogrin-si:0.0.1 .
