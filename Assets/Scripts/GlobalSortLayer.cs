using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalSortLayer : MonoBehaviour
{
    // �������� �������� Y
    [SerializeField] private float minY = 0f;
    [SerializeField] private float maxY = 10f;

    // �������� �������� Order In Layer
    [SerializeField] private int minLayerOrder = 0;
    [SerializeField] private int maxLayerOrder = 10;

    private SpriteRenderer spriteRenderer;

    private void Awake()
    {
        // �������� ��������� SpriteRenderer
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    private void Update()
    {
        // ������������ Order In Layer �� ������ ������� ������� Y
        float normalizedY = Mathf.InverseLerp(minY, maxY, transform.position.y);
        int sortingOrder = Mathf.RoundToInt(Mathf.Lerp(minLayerOrder, maxLayerOrder, normalizedY));

        // ��������� ������������ Order In Layer
        spriteRenderer.sortingOrder = sortingOrder;
    }
}
