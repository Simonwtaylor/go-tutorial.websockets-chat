var socket = new WebSocket("ws://localhost:8080/ws");

const connect = () => {
  console.log("Attempting connection...");

  socket.onopen = () => {
    console.log("Successfully connected :D");
  };

  socket.onmessage = (msg) => {
    console.log(`Message for me ${msg}`);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket error", error);
  };
};

const sendMsg = msg => {
  console.log("Sending msg", msg);
  socket.send(msg);
};

export { 
  connect,
  sendMsg,
};
