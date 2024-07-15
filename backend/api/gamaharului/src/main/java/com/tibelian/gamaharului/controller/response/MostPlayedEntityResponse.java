package com.tibelian.gamaharului.controller.response;

public class MostPlayedEntityResponse<T> {
	
    private int playCount;
    private T entity;

    public MostPlayedEntityResponse(int playCount, T entity) {
        this.playCount = playCount;
        this.entity = entity;
    }

    public int getPlayCount() {
        return playCount;
    }

    public void setPlayCount(int playCount) {
        this.playCount = playCount;
    }

    public T getEntity() {
        return entity;
    }

    public void setEntity(T entity) {
        this.entity = entity;
    }
}