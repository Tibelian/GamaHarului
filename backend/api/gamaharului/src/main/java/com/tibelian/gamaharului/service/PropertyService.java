package com.tibelian.gamaharului.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class PropertyService {

    @Autowired
    private Environment env;

    public String getString(String key, String defaultValue) {
        return env.getProperty(key, defaultValue);
    }

    public Boolean getBoolean(String key, Boolean defaultValue) {
        return env.getProperty(key, Boolean.class, defaultValue);
    }

    public Integer getInteger(String key, Integer defaultValue) {
        return env.getProperty(key, Integer.class, defaultValue);
    }

    public Double getDouble(String key, Double defaultValue) {
        return env.getProperty(key, Double.class, defaultValue);
    }

    public Long getLong(String key, Long defaultValue) {
        return env.getProperty(key, Long.class, defaultValue);
    }

    public Float getFloat(String key, Float defaultValue) {
        return env.getProperty(key, Float.class, defaultValue);
    }
    
}
