/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateTopicRequest } from '../definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from '../definitions/FreeFormNotificationRequest.js'
import { NotificationTopicResponse } from '../definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from '../definitions/NotificationWithTemplateRequest.js'
import { TopicByNamespacesResponse } from '../definitions/TopicByNamespacesResponse.js'
import { UpdateTopicRequest } from '../definitions/UpdateTopicRequest.js'

export class Notification$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [READ]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;get topic by namespace.
   */
  getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<IResponseWithSync<TopicByNamespacesResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, TopicByNamespacesResponse, 'TopicByNamespacesResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  createNotificationTopic(data: CreateTopicRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [DELETE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  deleteNotificationTopic_ByTopic(topic: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [READ]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;get topic information by topic name.
   */
  getNotificationTopic_ByTopic(topic: string): Promise<IResponseWithSync<NotificationTopicResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, NotificationTopicResponse, 'NotificationTopicResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:TOPIC [UPDATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/topics/{topic}'.replace('{namespace}', this.namespace).replace('{topic}', topic)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Sends notification to a user.
   */
  createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/users/{userId}/freeform'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Required permission : &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:NOTIFICATION [CREATE]&lt;/code&gt; with scope &lt;code&gt;social&lt;/code&gt; &lt;br&gt;Sends notification to a user with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  createTemplatedNotification_ByUserId(userId: string, data: NotificationWithTemplateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/notification/namespaces/{namespace}/users/{userId}/templated'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }
}
