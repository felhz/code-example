# 查看可执行sudo的用户的权限范围
sudo -l

/etc/sudoers
## 这行允许 sudo 组中的成员以任何用户和任何组的身份运行任何命令
# %sudo   ALL=(ALL:ALL) ALL

#添加sudo 用户
sudo visudo
 #  追加一下文件内容
 #  username   ALL=(ALL:ALL) ALL
# 查看sudo用户有那些
sudo cat /etc/sudoers