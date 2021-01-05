#!/bin/bash
set -e

python3 manage.py compress
python3 manage.py test
./scripts/test_code_quality.sh
bash <(curl -s https://codecov.io/bash)
