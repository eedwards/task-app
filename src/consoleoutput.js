******* {
    _id: new ObjectId("61ce1cc7d97d11453b7de77f"),
    description: 'eat',
    completed: false,
    owner: new ObjectId("61ce1cb4d97d11453b7de777"),
    __v: 0
  }
  Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
      at ServerResponse.setHeader (_http_outgoing.js:526:11)
      at ServerResponse.header (/Users/eric/Desktop/node-stuff/task-manager/node_modules/express/lib/response.js:771:10)
      at ServerResponse.send (/Users/eric/Desktop/node-stuff/task-manager/node_modules/express/lib/response.js:170:12)
      at ServerResponse.json (/Users/eric/Desktop/node-stuff/task-manager/node_modules/express/lib/response.js:267:15)
      at ServerResponse.send (/Users/eric/Desktop/node-stuff/task-manager/node_modules/express/lib/response.js:158:21)
      at /Users/eric/Desktop/node-stuff/task-manager/src/routers/task.js:36:9
      at processTicksAndRejections (internal/process/task_queues.js:97:5) {
    code: 'ERR_HTTP_HEADERS_SENT'
  }