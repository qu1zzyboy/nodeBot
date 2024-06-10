import asyncio
import json

from binance import AsyncClient, DepthCacheManager, BinanceSocketManager

async def main():
    # initialise the client
    client = await AsyncClient.create()

    # run some simple requests
    print(json.dumps(await client.get_exchange_info(), indent=2))

    print(json.dumps(await client.get_symbol_ticker(symbol="BTCUSDT"), indent=2))

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
