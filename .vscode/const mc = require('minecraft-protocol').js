const mc = require('minecraft-protocol');
const { translatePacket } = require('./translator');

function createMinecraftServer({ host, port, version, edition }) {
  const server = mc.createServer({
    'online-mode': false,
    host,
    port,
    version,
    'protocol': mc.supportedVersions.includes(version) ? mc.protocolVersions[version] : undefined,
  });

  server.on('login', (client) => {
    console.log(`Jugador conectado desde ${edition} Edition: ${client.username}`);

    client.on('packet', (data, meta) => {
      const targetServer = edition === 'Java' ? bedrockServer : javaServer;
      const direction = edition === 'Java' ? 'java_to_bedrock' : 'bedrock_to_java';

      if (targetServer.clients.size > 0) {
        const translatedPacket = translatePacket(data, meta, direction);
        if (translatedPacket) {
          for (const targetClient of Object.values(targetServer.clients)) {
            targetClient.write(translatedPacket.meta.name, translatedPacket.data);
          }
        }
      }
    });
  });

  return server;
}

const javaServer = createMinecraftServer({
  host: '0.0.0.0',
  port: 25565,
  version: '1.20.1',
  edition: 'Java',
});

const bedrockServer = createMinecraftServer({
  host: '0.0.0.0',
  port: 19132,
  version: 'bedrock_1.20.0',
  edition: 'Bedrock',
});
