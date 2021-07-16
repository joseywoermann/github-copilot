# create a basic bot using discord.py

import discord
import asyncio
import random
import os

client = discord.Client()

@client.event
async def on_ready():
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

@client.event
async def on_message(message):
    if message.content.startswith('!hello'):
        msg = 'Hello {0.author.mention}'.format(message)
        await client.send_message(message.channel, msg)
    elif message.content.startswith('!flip'):
        msg = '{0.author.mention}'.format(message)
        await client.send_message(message.channel, msg)

client.run(os.environ['DISCORD_TOKEN'])