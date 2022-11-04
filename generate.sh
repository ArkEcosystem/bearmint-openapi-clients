rm -rf go && mkdir go && cd go && openapi-generator generate -i ../openapi.json -g go --skip-validate-spec && cd ..
rm -rf java && mkdir java && cd java && openapi-generator generate -i ../openapi.json -g java --skip-validate-spec && cd ..
rm -rf kotlin && mkdir kotlin && cd kotlin && openapi-generator generate -i ../openapi.json -g kotlin --skip-validate-spec && cd ..
rm -rf php && mkdir php && cd php && openapi-generator generate -i ../openapi.json -g php --skip-validate-spec && cd ..
rm -rf ruby && mkdir ruby && cd ruby && openapi-generator generate -i ../openapi.json -g ruby --skip-validate-spec && cd ..
rm -rf rust && mkdir rust && cd rust && openapi-generator generate -i ../openapi.json -g rust --skip-validate-spec && cd ..
rm -rf typescript && mkdir typescript && cd typescript && openapi-generator generate -i ../openapi.json -g typescript --skip-validate-spec && cd ..
