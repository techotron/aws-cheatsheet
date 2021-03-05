# EC2 101
- Elastic Compute Cloud - provides resizable compute capacity in the cloud
- Allows you scale capacity up and down easily
- Different pricing models:
    - On Demand (fixed rate by the second or hour)
    - Reserved (reserved capacity with discount on the hourly rate. 1 or 3 year terms)
    - Spot (any capacity which isn't being used, AWS will allow you to bid for it at a cheaper cost than the standard hourly rate)
    - Dedicated Hosts (Physical EC2 server, dedicated to you. They are useful when software licensing is bound to hardware)

## On Demand use cases
- Low cost and flexibility (no up-front payments)
- Applications with short term, spiky or unpredictable workloads _that cannot be interrupted_
- Applications that are being developed or tested on EC2 for the first time

## Reserved use cases
- Steady, predictable usage
- Up-front payment comes with discounts, reducing overall costs further
- 2 types:
    - **Standard Reserved Instances:** Up to 75% off on demand instances
    - **Convertible Reserved Instances:** Up to 54% off on demand, plus the ability to change the RI attributes (as long the change is of equal or greater value)
    - **Scheduled Reserved Instances:** Available to launch RI within the time window (good for predictable reoccuring traffic)

## Spot Instances use cases
- Applications which have flexible start and end times
- Urgent computing needs for large amounts of additional capacity

## Dedicated Host use cases
- Cases where regulatory requirements mean you can't run multi-tenant virtualisation
- Licensing models which are tied to hardware
- Can be purchased On-Demond (hourly) or as Reserved Instances (up to 70% off the on demand price)

## Instance Types and their use case
![image](https://sgitario.github.io/images/aws-ec2-instance-types.png)


---------------------
# Security Groups (DEMO)


---------------------
# EBS 101
- You are able to encrypt the root device using KMS 

---------------------
