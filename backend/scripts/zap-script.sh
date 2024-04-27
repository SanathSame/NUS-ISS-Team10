#!/bin/bash


docker pull owasp/zap2docker-stable
docker run -i owasp/zap2docker-stable zap-baseline.py -t "https://github.com/SanathSame/NUS-ISS-Team10/" -l PASS > zap_baseline_report.html

echo $? > /dev/null