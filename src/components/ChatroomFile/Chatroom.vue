<template>
    <div class="chat-window">
      <div class="messages" ref="msgBox">
          <div class="single" v-for="message in formattedMessages" :key="message.id">
              <span class="created-at">{{ message.created_at }}</span>
              <div class="ima_dis_name">
                  <img class="image" src="https://shorturl.at/bqDIP" alt="">
                  <span class="name">{{ message.name }}</span>
              </div>
              <div class="user_tex">
                  <span class="message">{{ message.message }}</span>
                  <h1>Hello</h1>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
//   import { db } from '@/firebase/config'
//   import { computed, onUpdated, ref } from 'vue'
//   import {formatDistanceToNow} from "date-fns"

  </script>
  
  <style scoped>
      .chat-window {
          background: #fafafa;
          padding: 30px 20px;
      }
      .single {
          margin: 18px 0;
          /* background-color: aliceblue; */
          /* padding: 20px; */
      }
      .created-at {
          display: block;
          color: #999;
          font-size: 12px;
          margin-bottom: 4px;
          margin: 0px 0px 0px 34px;
      }
      .name {
          font-weight: bold;
          margin-right: 6px;
          color: #003459;
      }
      .messages {
          max-height: 400px;
          overflow: auto;
      }
      .image {
          height: 25px;
          width: 25px;
          border-radius: 100%;
          margin-right: 10px;
      }
      .ima_dis_name {
          display: flex;
          align-items: center;
      }
      .user_tex {
          margin: 0px 0px 10px 34px;
      }
  </style>