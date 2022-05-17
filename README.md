#### 1.安装对应的docker https://docs.docker.com/engine/install

#   2.进入docker_test

#   3.终端输入docker build -t 打包名字 .

![image](https://user-images.githubusercontent.com/102155088/168894361-fb6bd3cf-dc35-41dd-926e-fb59013853f4.png)

> 如果你是用虚拟机记得把本地的翻墙代理关掉，不关掉的话npm install可能会失败
# 4.docker run -d -p 4000:3000 名字
#docker run xxx:开始运行容器，
#-d:分离模式启动容器，启动容器并可以在启动后使用控制台执行其他命令
#-p:开启映射，4000:3000：容器中的 3000 端口会对应到本地的 4000 端口
#Linux的话 ip a可以查看地址，地址:本地端口号就可以访问到了
# 5.docker login  
#登录到docker，你需要有一个docker账号https://hub.docker.com/,然后去开一个私有的库 
#可以直接把身份写在一行命令行而不用手动输入，配置一个什么文件啥的没看懂https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin
# 6. docker tag  打包名字  docker用户名/docker仓库:自定义tag名称
#改可以推到仓库的格式，自定义tag名称也可以不写，不写自动会在后面加latest 
#docker tag test112  sunjia1/test1:test111
![image](https://user-images.githubusercontent.com/102155088/168899140-91efb51c-f2dc-41ef-ae32-3a4f4f3c9e8d.png)
# 8. docker images
#你现在有两个镜像了
# 9. docker push sunjia1/test1
#推到自己的仓库里
# 10. docker pull docker用户名/docker仓库:自定义tag名称
#你可以删除现在的所有镜像然后拉取dockerhub里的镜像了
#docker pull sunjia1/test1:test111   
# 11.运行 同4 
#docker run -d -p 4000:3000 sunjia1/test1:test111 
