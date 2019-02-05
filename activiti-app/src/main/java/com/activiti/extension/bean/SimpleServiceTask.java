package com.activiti.extension.bean;

import org.activiti.engine.delegate.DelegateExecution;
import org.springframework.stereotype.Component;

/**
 * Created by alfresco on 2/4/19.
 */
@Component("simpleServiceTask")
public class SimpleServiceTask {

    public void sayIt(DelegateExecution execution) {
        System.out.println("Hello from SimpleServiceTask Bean!");
    }

}
