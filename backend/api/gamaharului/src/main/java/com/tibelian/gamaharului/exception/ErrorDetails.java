package com.tibelian.gamaharului.exception;

import java.util.Date;

/**
 * 
 */
public class ErrorDetails {
	
    private Date timestamp;
    private int status;
    private String message;
    private String details;

    public ErrorDetails(int status, String message, String details) {
        this.timestamp = new Date();
        this.status = status;
        this.message = message;
        this.details = details;
    }

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}
    
}