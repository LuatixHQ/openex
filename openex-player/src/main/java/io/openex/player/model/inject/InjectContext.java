package io.openex.player.model.inject;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRawValue;
import com.fasterxml.jackson.databind.JsonNode;

public class InjectContext {

    private String id;
    private String type;
    private String callbackUrl;
    private Object data;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @JsonProperty("callback_url")
    public String getCallbackUrl() {
        return callbackUrl;
    }

    public void setCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
    }

    @JsonRawValue
    public String getData() {
        return data == null ? null : data.toString();
    }

    public void setData(JsonNode data) {
        this.data = data;
    }
}
