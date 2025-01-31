/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { FileUploadUrlInfo } from '../definitions/FileUploadUrlInfo.js'

export class FileUpload$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;There are 2 kinds of storage limitation per user : maximum file count and maximum file size.&lt;br/&gt;The threshold of those limitations is different between upload category that is used.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;NAMESPACE:{namespace}:USER:{userId}:FILEUPLOAD&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file count per user&lt;/i&gt;: 10 files&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file size per user&lt;/i&gt;: 104857600 bytes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  createFile_ByUserId(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<IResponse<FileUploadUrlInfo>> {
    const params = { category: 'default', ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/users/{userId}/files'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, FileUploadUrlInfo, 'FileUploadUrlInfo')
  }

  /**
   * Generate an upload URL. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource = &lt;b&gt;&#34;NAMESPACE:{namespace}:FILEUPLOAD&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11101&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
   */
  createFile_ByFolder(folder: string, queryParams: { fileType: string | null }): Promise<IResponse<FileUploadUrlInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/{namespace}/folders/{folder}/files'
      .replace('{namespace}', this.namespace)
      .replace('{folder}', folder)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, FileUploadUrlInfo, 'FileUploadUrlInfo')
  }
}
