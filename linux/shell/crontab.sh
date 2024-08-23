#!/bin/sh
# 1. 通过crontab -e编辑定时任务
# 2. 通过crontab -l查看定时任务
# 3. 通过crontab -r删除定时任务
# 每分钟运行一次
* * * * *  /Users/hongzhao/demo/design-mode/linux/shell/crontab.sh
cd /Users/hongzhao/demo/design-mode/linux/shell
curl  https://www.baidu.com >> baidu.html