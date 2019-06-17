dcoker

使用 docker 安装 ubuntu 镜像



```bash
docker search ubuntu # 查找 Ubuntu 镜像
docker pull ubuntu # 安装 Ubuntu 镜像
docker images #查看 docker 镜像

# 创建并运行 docker 容器
docker run -it -d --name ubuntu_test -p 8088:80 ubuntu
# --name 自定义容器名，-p 指定端口映射，前者为虚拟机端口，后者为容器端口,成功后返回 id

# 运行 docker 容器  启动一个bash交互终端
docker run -it 容器名:容器tag /bin/bash

docker start container_id


# 查看所有启动的容器(查看所有容器加 -a)
docker ps

# 根据 id 查看容器信息
docker inspect id

# 进入docker(或者把容器id改为容器名，也可以进入)
docker exec -it 容器id或容器名 /bin/bash

# 退出容器
exit

# 停止容器
docker stop id

# 删除容器
docker rm 容器id

# 删除镜像
docker rmi 删除镜像

# 制作docker镜像  1.0为版本号
docker commit 98 ubuntu_test:1.0

# 查看镜像是否创建 
docker images

# 打包镜像并查看
docker save -o ubuntu_test.tar ubuntu_test:1.0
```