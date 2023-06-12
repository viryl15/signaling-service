turnConfig = {
    iceServers: [{
      urls: [ "stun:fr-turn1.xirsys.com" ]
   }, {
      username: "gOmVyho-1KS2ejVgrLE07t7MvLRJxFwedju_qq4QFS2pupkJwUuWlTg_iRDsJC2QAAAAAGR-hFh2aXJ5bDE1",
      credential: "08a4bf5e-0405-11ee-b93f-0242ac120004",
      urls: [
          "turn:fr-turn1.xirsys.com:80?transport=udp",
          "turn:fr-turn1.xirsys.com:3478?transport=udp",
          "turn:fr-turn1.xirsys.com:80?transport=tcp",
          "turn:fr-turn1.xirsys.com:3478?transport=tcp",
          "turns:fr-turn1.xirsys.com:443?transport=tcp",
          "turns:fr-turn1.xirsys.com:5349?transport=tcp"
      ]
   }]
  }