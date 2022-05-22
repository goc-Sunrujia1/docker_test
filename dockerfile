FROM sunjia1/test:auto_node
WORKDIR /code
ADD . /code
RUN npm install
CMD node index.js
